import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
} from '@germanoricardi-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    content: 'Tooltip example',
    children: (
      <Button
        style={{ width: 150, margin: '0 auto' }}
        size={'sm'}
        variant={'tertiary'}
      >
        Hover here
      </Button>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  decorators: [
    (Story) => {
      return (
        <Box
          as={'div'}
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {Story()}
        </Box>
      )
    },
  ],
}
export const Opened: StoryObj<TooltipProps> = {
  args: { open: true },
}
