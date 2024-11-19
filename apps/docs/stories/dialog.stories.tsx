import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Label,
  Input,
  Button,
} from '@freemed-kit/ui'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: args => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="tw-sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="tw-grid tw-gap-4 tw-py-4">
          <div className="tw-grid tw-grid-cols-4 tw-items-center tw-gap-4">
            <Label className="tw-text-right" htmlFor="name">
              Name
            </Label>
            <Input className="tw-col-span-3" defaultValue="Pedro Duarte" id="name" />
          </div>
          <div className="tw-grid tw-grid-cols-4 tw-items-center tw-gap-4">
            <Label className="tw-text-right" htmlFor="username">
              Username
            </Label>
            <Input className="tw-col-span-3" defaultValue="@peduarte" id="username" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ),
}

export const DialogWithButton: Story = {
  render: args => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="tw-sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="tw-grid tw-gap-4 tw-py-4">
          <div className="tw-grid tw-grid-cols-4 tw-items-center tw-gap-4">
            <Label className="tw-text-right" htmlFor="name">
              Name
            </Label>
            <Input className="tw-col-span-3" defaultValue="Pedro Duarte" id="name" />
          </div>
          <div className="tw-grid tw-grid-cols-4 tw-items-center tw-gap-4">
            <Label className="tw-text-right" htmlFor="username">
              Username
            </Label>
            <Input className="tw-col-span-3" defaultValue="@peduarte" id="username" />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="default">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
