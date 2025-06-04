import type { Meta, StoryObj } from '@storybook/react'
import { Toaster, Button } from '@freemed-kit/ui'
import { toast } from 'sonner'
import docs from '../docs'

const meta: Meta = {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component: docs('sonner'),
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <>
        {Story()}
        <Toaster closeButton richColors />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render(args) {
    return (
      <Button onClick={() => toast('Event has been created.')} variant="outline">
        Show Toast
      </Button>
    )
  },
}

export const Success: Story = {
  render: function Render(args) {
    return (
      <Button
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
        variant="outline"
      >
        Show Toast
      </Button>
    )
  },
}
