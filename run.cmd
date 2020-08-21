@echo off
if not DEFINED IS_MINIMIZED set IS_MINIMIZED=1 && start "" /min "%~dpnx0" %* && exit
title Cookie Clicker - "reversed" by f1sk
npm start&&exit
exit