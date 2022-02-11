import 'bluebird-global'
// eslint-disable-next-line import/order
import './sdk/rewire'
import * as runtime from '@botpress/runtime'

import { makeLogger } from '@botpress/logger'

import sdk, { Logger, LogLevel } from 'botpress/sdk'
import chalk from 'chalk'
import fs from 'fs'
import _ from 'lodash'
import { Botpress } from './botpress'

import { showBanner } from 'misc/banner'

async function setupDebugLogger(logger: Logger) {
  global.printBotLog = (botId, args) => {
    const message = args[0]
    const rest = args.slice(1)

    logger.level(LogLevel.DEBUG).persist(false).forBot(botId).debug(message.trim(), rest)
  }

  global.printLog = (args) => {
    const message = args[0]
    const rest = args.slice(1)

    logger.level(LogLevel.DEBUG).persist(false).debug(message.trim(), rest)
  }
}

async function start() {
  const logger = makeLogger({}) as never as sdk.Logger
  await setupDebugLogger(logger)

  showBanner({ title: 'Botpress Studio', version: process.STUDIO_VERSION, logScopeLength: 9, bannerWidth: 75, logger })

  const studio = new Botpress(logger)

  if (!fs.existsSync(process.APP_DATA_PATH)) {
    try {
      fs.mkdirSync(process.APP_DATA_PATH)
    } catch (err) {
      logger.attachError(err).error(
        `Could not find/create APP_DATA folder "${process.APP_DATA_PATH}".
Please make sure that Botpress has the right to access this folder or change the folder path by providing the 'APP_DATA_PATH' env variable.
This is a fatal error, process will exit.`
      )

      if (!process.IS_FAILSAFE) {
        process.exit(1)
      }
    }
  }

  try {
    await studio.start()
    await runtime.start()
    logger.info(chalk.gray(`Studio is listening at: ${process.LOCAL_URL}`))
  } catch (err) {
    logger.error(`Could not start Botpress: ${err.message}`, err)
    process.exit(1)
  }
}

start().catch(global.printErrorDefault)
