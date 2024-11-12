import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from '@freemed-kit/ui'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollArea>

export const Docs: Story = {
  render: args => (
    <ScrollArea className="tw-h-[200px] tw-w-[350px] tw-rounded-md tw-border tw-p-4">
      Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the
      king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he couldn&apos;t seem to stop
      Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny
      that they couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.
    </ScrollArea>
  ),
}
