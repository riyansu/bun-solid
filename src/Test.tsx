import { createEffect, Component, lazy, createComputed, createSignal, onMount} from 'solid-js';
import { Router,Route } from '@solidjs/router';
import { css } from '../styled-system/css';

import logo from './logo.svg';
import styles from './App.module.css';
import { Editor } from './Monaco'

const Test: Component = () => {
  let mainEditor:any;
  const [dark,setDark] = createSignal(false)
  onMount(()=>{
    const test = new Editor(mainEditor)
    test.init()
  })
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={css({h:"40vmin"})} alt="logo"/>
        <p>
            Hey
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is the test.
        </a>
        <div ref={mainEditor} class={css({w:"100%",h:"400px",textAlign:"left"})}></div>
      </header>
    </div>
  );
};

export default Test;
