import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from "@storybook/addon-info";
import Button from './'

const seperatorStyles = {
  height: 2, 
  background: '#999', 
  margin: '30px 0'
}

storiesOf('Button', module)
  .addDecorator(withInfo)
  .add('Clubhouse Button', () => (
    <div>
      <Button onClick={action('clicked')}>Primary Button</Button>
      <div style={seperatorStyles} />
      <Button disabled onClick={action('clicked')}>Primary Button Disabled</Button>
      <div style={seperatorStyles} />
      <Button secondary onClick={action('clicked')}>Secondary Button</Button>
      <div style={seperatorStyles} />
      <Button secondary disabled onClick={action('clicked')}>Secondary Button Disabled</Button>
    </div>
    ), 
  {info: `
    📚 Clubhouse Button Guidelines 👍
    
    Should be used for all major call to actions.

    The Clubhouse **"secondary"** style button should only be used when the background is of the primary color.
    ` 
  })
