import { createEffect, type Component } from 'solid-js';
import { css } from '../styled-system/css';

import logo from './logo.svg';
import styles from './App.module.css';
import { Editor } from './Monaco';

const App: Component = () => {
  let mainEditor:any;
  createEffect(()=>{
    const test = new Editor(mainEditor)
    test.init()
  })
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={css({h:"40vmin"})} alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <div ref={mainEditor} class={css({w:"100%",h:"400px",textAlign:"left"})}></div>
      </header>
    </div>
  );
};

export default App;
