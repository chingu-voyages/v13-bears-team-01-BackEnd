import React from 'react'
import { Button, Container, Header, List } from 'semantic-ui-react'
import ReminderList from '../../components/reminder-list/ReminderList'
import ListList from '../../components/list-list/ListList'
import './home-page.styles.css'

const HomePage = (props) => {
  return (
    <div id='home-page'>
      <Container text>
        <section id='reminders'>
          <Header as='h2'>Reminders</Header>
          <List celled>
            <ReminderList reminders={props.reminders} />
          </List>
        </section>
        <section id='lists'>
          <Header as='h2'>Lists</Header>
          <List celled>
            <ListList reminders={props.reminders} />
          </List>
        </section>
        <Button circular icon='plus' floated='right' color='green' />
      </Container>
    </div>
  )
}
export default HomePage
