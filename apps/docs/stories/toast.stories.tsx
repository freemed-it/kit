import type { Meta, StoryObj } from '@storybook/react'
import { Toaster, useToast, Button } from '@freemed-kit/ui'

const meta: Meta = {
  title: 'Components/Toast',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <>
        {Story()}
        <Toaster />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render(args) {
    const { toast } = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Default Toast',
            description: 'This is a default toast notification.',
          })
        }
        variant="outline"
      >
        Show Default Toast
      </Button>
    )
  },
}

export const Destructive: Story = {
  render: function Render(args) {
    const { toast } = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Error!',
            description: 'Something went wrong.',
            variant: 'destructive',
          })
        }
        variant="destructive"
      >
        Show Destructive Toast
      </Button>
    )
  },
}
