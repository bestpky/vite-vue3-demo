import { provide, inject, createApp, createVNode } from 'vue';
import comp from './index.vue'

type Command = {
  text: string
  run: () => void
}

type Comands = {
  [key: string]: Command
}

const ContextMenuSymbol = Symbol();

let wrapper: HTMLDivElement | null = null,
// 全局的意义：支持provide时初始化和inject时扩展
globalCommands: Comands = {}

// 参数是inject调用时传入的
const _contextMenu = (e: MouseEvent, c?: Comands) => {
  globalCommands = {...globalCommands, ...c}
  
  const contextMenuVM = createApp({
    setup() {
      return () => createVNode(comp, {commands: globalCommands, position: [e.clientX,e.clientY]})
    }
  })
  
  if (!wrapper) {
    // 如果该节点以经存在则不重新创建
    wrapper = document.createElement('div');
    wrapper.id = 'context-menu';
    document.body.appendChild(wrapper);
  }
  contextMenuVM.mount(wrapper);
  return () => {
    contextMenuVM?.unmount()
  }
}

export function provideContextMenu(commands: Comands) {
  globalCommands = {...globalCommands, ...commands}
  provide(ContextMenuSymbol, _contextMenu);
}

export function useContextMenu() {
  const cm: any = inject(ContextMenuSymbol);
  if (!cm) {
      throw new Error('error');
  }
  return cm;
}