import { StoryObj } from '@storybook/react';
import PageSubTitle from '@/components/atoms/PageTitle/PageSubTitle';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof PageSubTitle> = {
  component: PageSubTitle,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof PageSubTitle>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
