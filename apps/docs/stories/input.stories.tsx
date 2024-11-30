import type { Meta, StoryObj } from '@storybook/react'
import { Button, Input, Label } from '@freemed-kit/ui'
import docs from '../docs'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: docs('input'),
      },
    },
  },
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

export const Email: Story = {
  args: {
    placeholder: 'Email',
    type: 'email',
  },
}

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
  },
}

export const File: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
}

export const WithLabel: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="Email" type="email" />
    </div>
  ),
}

export const WithButton: Story = {
  render: args => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="Email" type="email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
}
