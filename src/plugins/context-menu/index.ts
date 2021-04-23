import { provide, inject, reactive, createApp, App, createVNode } from 'vue';
import comp from './index.vue'

type Command = {
  text: string
  run: () => void
}

type Comands = {
  [key: string]: Command
}

const ContextMenuSymbol = Symbol();

let contextMenuVM: App | null = null
let wrapper: HTMLDivElement | null = null
let globalCommands: Comands = {}

const state = reactive({
  position: [0, 0]
});

const _contextMenu = (e: MouseEvent, c?: Comands) => {
  state.position = [e.clientX,e.clientY]
  globalCommands = {...globalCommands, ...c}
  if(!contextMenuVM) {
    contextMenuVM = createApp({
      setup() {
        return () => createVNode(comp, {commands: globalCommands, position: state.position})
      }
    })
  }
  if (!wrapper) {
    // 如果该节点以经存在则不重新创建
    wrapper = document.createElement('div');
    wrapper.id = 'context-menu';
    document.body.appendChild(wrapper);
    contextMenuVM.mount('#context-menu');
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