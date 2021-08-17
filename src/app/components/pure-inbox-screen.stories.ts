import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TaskModule } from './task.module';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from '../state/task.state';

export default {
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [PureInboxScreenComponent],
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store]
    })
  ],
  title: 'Pure Inbox Screen',
} as Meta;

const Template: Story<PureInboxScreenComponent> = args => ({
  props: args
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true
};