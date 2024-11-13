import type { Meta, StoryObj } from '@storybook/react'
import { Button, Input, Label } from '@freemed-kit/ui'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Enter text...' },
    type: {
      control: 'select',
      options: ['text', 'email', 'picture', 'password'],
    },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Text',
    type: 'text',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Text',
    type: 'text',
    disabled: true,
  },
}

export const InputEmail: Story = {
  args: {
    placeholder: 'Email',
    type: 'email',
  },
}

export const InputPassword: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
  },
}

export const InputFile: Story = {
  render: args => (
    <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
}

export const InputWithLabel: Story = {
  render: args => (
    <div className="tw-grid tw-w-full tw-max-w-sm tw-items-center tw-gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="Email" type="email" />
    </div>
  ),
}

export const InputWithButton: Story = {
  render: args => (
    <div className="tw-flex tw-w-full tw-max-w-sm tw-items-center tw-space-x-2">
      <Input placeholder="Email" type="email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
}
