// 创建实例
import models from '../models';
import {create} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';

const app = create();
// 加载对象
models.forEach(model => {
  app.model(model);
});
app.use(createLoading());
app.use(require('dva-immer').default());
// 启动dva
app.start();
// 导出对象
export default app._store;
