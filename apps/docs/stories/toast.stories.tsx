import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastTitle, ToastDescription, ToastProvider, ToastViewport, Button } from '@freemed-kit/ui'
import { useToast } from '@freemed-kit/ui/hooks/use-toast'
import { Toaster } from '@freemed-kit/ui/components/toaster'

const meta: Meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ToastProvider>
        {Story()}
        <Toaster />
        <ToastViewport />
      </ToastProvider>
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

export const Destructivet: Story = {
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
