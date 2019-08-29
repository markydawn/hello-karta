import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const msg = 'new message';
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg },
  });

  it('renders props.msg when passed', () => {
    expect(wrapper.text()).to.include(msg);
  });

  it('renders the correct markup', () => {
    expect(wrapper.find('.count').text()).to.equal('0');
  });

  it('renders a button', () => {
    expect(wrapper.contains('button')).to.equal(true);
  });

  it('button click should increment', () => {
    expect(wrapper.vm.count).to.equal(0);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.find('.count').text()).to.equal('1');
  });
});
