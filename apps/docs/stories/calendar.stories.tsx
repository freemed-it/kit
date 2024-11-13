import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@freemed-kit/ui'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

function CalendarDocs({ ...args }): JSX.Element {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar {...args} className="tw-rounded-md tw-border tw-w-fit" mode="single" onSelect={setDate} selected={date} />
  )
}

export const Docs: Story = {
  render: args => <CalendarDocs {...args} />,
}
