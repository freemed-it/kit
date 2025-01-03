import { useState } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@freemed-kit/ui'
import docs from '../docs'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: docs('calendar'),
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Docs: Story = {
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return <Calendar className="rounded-md border w-fit" mode="single" onSelect={setDate} selected={date} />
  },
}
