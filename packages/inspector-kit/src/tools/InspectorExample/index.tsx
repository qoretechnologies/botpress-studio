import React, { useState, useCallback, FC } from 'react'

import { Tab, TabGroup, Form, FormGroup } from '../../Inspector'
import style from './style.scss'

interface OwnProps {
  panes: any[]
}

const InspectorExample: FC<OwnProps> = ({ panes }) => {
  const [selectedPane, setSelectedPane] = useState(panes[0])

  const handleTabClick = useCallback(
    (id) => {
      console.log(id)
      setSelectedPane(panes.find((pane) => pane.id === id))
    },
    [setSelectedPane]
  )

  const handleFormChange = (formId: string, newForm: any) => {
    console.log(formId, newForm)
  }

  return (
    <div className={style.container}>
      <TabGroup onChange={handleTabClick}>
        {panes.map((pane) => (
          <Tab id={pane.id} label={pane.name} />
        ))}
      </TabGroup>
      <FormGroup onUpdate={handleFormChange}>
        {selectedPane.forms.map(({ id, name, form }: any) => (
          <Form id={id} label={name} form={form} />
        ))}
      </FormGroup>
    </div>
  )
  // return (
  //   <div className={style.container}>
  //     <TabGroup onChange={func}>
  //       <Tab label="sometab" />
  //       <Tab label="sometab" />
  //     </TabGroup>
  //     <FormGroup onChange={func}>
  //       <Form label="someform">
  //         <FormKit.EditableText />
  //       </Form>
  //       <Form label="someform">
  //         <FormKit.EditableText />
  //       </Form>
  //     </FormGroup>
  //   </div>
  // )
}

// TabBar.Tab

export default InspectorExample
