'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login',controller.user.login)
  router.get('/getuser',controller.user.getuser)
  router.post('/deletelist',controller.user.deletelist)
  router.post('/addlist',controller.user.addlist)
  router.post('/uplist',controller.user.uplist)
  router.get('/getmenu',controller.home.getmenu)
};
