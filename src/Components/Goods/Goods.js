import React, { useState } from 'react';

import styles from './Goods.module.css';
function Goods() {

  const [state, setState] = useState(0)

  return (
    <div className={styles.goodsWrap}>
      <ul>sdasdas
        dasdasd
      </ul>
      <button onClick={() => setState(state + 1)}>click {state}</button>
    </div>
  );
}

export default Goods;