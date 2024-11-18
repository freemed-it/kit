import type { Meta, StoryObj } from '@storybook/react'
import { Button, Input, Label, Popover, PopoverContent, PopoverTrigger } from '@freemed-kit/ui'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Docs: Story = {
  render: args => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="tw-w-80">
        <div className="tw-grid tw-gap-4">
          <div className="tw-space-y-2">
            <h4 className="tw-font-medium tw-leading-none">Dimensions</h4>
            <p className="tw-text-sm tw-text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="tw-grid tw-gap-2">
            <div className="tw-grid tw-grid-cols-3 tw-items-center tw-gap-4">
              <Label htmlFor="width">Width</Label>
              <Input className="tw-col-span-2 tw-h-8" defaultValue="100%" id="width" />
            </div>
            <div className="tw-grid tw-grid-cols-3 tw-items-center tw-gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input className="tw-col-span-2 tw-h-8" defaultValue="300px" id="maxWidth" />
            </div>
            <div className="tw-grid tw-grid-cols-3 tw-items-center tw-gap-4">
              <Label htmlFor="height">Height</Label>
              <Input className="tw-col-span-2 tw-h-8" defaultValue="25px" id="height" />
            </div>
            <div className="tw-grid tw-grid-cols-3 tw-items-center tw-gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input className="tw-col-span-2 tw-h-8" defaultValue="none" id="maxHeight" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
