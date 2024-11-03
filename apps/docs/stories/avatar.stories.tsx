import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from '@freemed-kit/ui'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const AvatarWithImage: Story = {
  render: args => (
    <Avatar>
      <AvatarImage alt="@freemed-it-admin" src="https://github.com/freemed-it-admin.png" />
      <AvatarFallback>FRMD</AvatarFallback>
    </Avatar>
  ),
}

export const AvatarWithFallback: Story = {
  render: args => (
    <Avatar>
      <AvatarImage alt="@freemed-it-admin" src="" />
      <AvatarFallback>FRMD</AvatarFallback>
    </Avatar>
  ),
}
