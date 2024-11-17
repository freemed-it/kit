import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@freemed-kit/ui'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: args => (
    <div className="tw-flex tw-items-center tw-space-x-4">
      <Skeleton className="tw-h-12 tw-w-12 tw-rounded-full" />
      <div className="tw-space-y-2">
        <Skeleton className="tw-h-4 tw-w-[250px]" />
        <Skeleton className="tw-h-4 tw-w-[200px]" />
      </div>
    </div>
  ),
}

export const Card: Story = {
  render: args => (
    <div className="tw-flex tw-flex-col tw-space-y-3">
      <Skeleton className="tw-h-[125px] tw-w-[250px] tw-rounded-xl" />
      <div className="tw-space-y-2">
        <Skeleton className="tw-h-4 tw-w-[250px]" />
        <Skeleton className="tw-h-4 tw-w-[200px]" />
      </div>
    </div>
  ),
}
