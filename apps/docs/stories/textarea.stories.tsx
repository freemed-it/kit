import type { Meta, StoryObj } from '@storybook/react'
import { Button, Label, Textarea } from '@freemed-kit/ui'

// TextareaWithButton 컴포넌트를 추가한 후, Storybook에 등록
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Enter your text here...' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Textarea',
    disabled: true,
  },
}

export const WithContent: Story = {
  args: {
    children: 'This is pre-filled content in the textarea',
  },
}

export const WithLabel: Story = {
  render: args => (
    <div className="tw-grid tw-w-full tw-gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
}

export const WithText: Story = {
  render: args => (
    <div className="tw-grid tw-w-full tw-gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea id="message-2" placeholder="Type your message here." />
      <p className="tw-text-sm tw-text-gray-300">Your message will be copied to the support team.</p>
    </div>
  ),
}

export const WithButton: Story = {
  render: args => (
    <div className="tw-grid tw-w-full tw-gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
}
