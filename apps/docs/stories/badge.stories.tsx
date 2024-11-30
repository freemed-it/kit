import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@freemed-kit/ui'
import docs from '../docs'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: docs('badge'),
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: 'Badge' },
    variant: {
      control: 'radio',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Badge',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Badge',
  },
}
