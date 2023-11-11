import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps, Button } from '@germanoricardi-ignite-ui/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Title',
    description: 'Description',
    open: false,
  },
  decorators: [
    (Story) => {
      const [{ open }, setOpen] = useArgs()

      const onClick = () => {
        setOpen({ open: !open })
      }

      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Button onClick={onClick}>{open ? 'Hide' : 'Show'} Toast</Button>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
