import { provide, inject, reactive, createApp, h, App } from 'vue';

const ContextMenuSymbol = Symbol();

let contextMenuVM: App | null = null
let wrapper: HTMLDivElement | null = null

const _contextMenu = () => {
  if(!contextMenuVM) {
    contextMenuVM = createApp({
      setup() {
        return () => 
          h(
            'div',
          )
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

export function provideContextMenu(commands) {
  provide(ContextMenuSymbol, _contextMenu);
}

export function useContextMenu() {
  const cm = inject(ContextMenuSymbol);
    if (!cm) {
        throw new Error('error');
    }
    return cm;
}