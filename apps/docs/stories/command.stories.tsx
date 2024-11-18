import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from '@storybook/preview-api'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '@freemed-kit/ui'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: args => (
    <Command className="tw-border tw-rounded-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialog: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
      const down = (e: KeyboardEvent): void => {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen(open => !open)
        }
      }

      document.addEventListener('keydown', down)
      return () => { document.removeEventListener('keydown', down); }
    }, [])

    return (
      <>
        <p className="tw-text-sm tw-text-muted-foreground">
          Press{' '}
          <kbd className="tw-pointer-events-none tw-inline-flex tw-h-5 tw-select-none tw-items-center tw-gap-1 tw-rounded tw-border tw-bg-muted tw-px-1.5 tw-font-mono tw-text-[10px] tw-font-medium tw-text-muted-foreground tw-opacity-100">
            <span className="tw-text-xs">⌘</span>J
          </kbd>
        </p>
        <CommandDialog onOpenChange={setOpen} open={open}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}
