import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@freemed-kit/ui'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: 'Button' },
    variant: {
      control: 'select',
      options: ['primary', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: { control: 'radio', options: ['sm', 'md', 'lg', 'icon'] },
    asChild: { control: 'boolean' },
    onClick: { action: 'clicked', type: 'function' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}
