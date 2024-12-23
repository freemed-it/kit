import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from '@freemed-kit/ui'
import docs from '../docs'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: docs('avatar'),
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  render: args => (
    <Avatar>
      <AvatarImage alt="@freemed-it-admin" src="https://github.com/freemed-it-admin.png" />
      <AvatarFallback>FRMD</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: args => (
    <Avatar>
      <AvatarImage alt="@freemed-it-admin" src="" />
      <AvatarFallback>FRMD</AvatarFallback>
    </Avatar>
  ),
}
