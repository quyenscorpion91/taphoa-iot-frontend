/**
  *************************************************************************************
  @ Author:	Quyen Truong
  @ Email:	quyentruong.scorpion@gmail.com
  @ Version:	
  @ Project:	
  *************************************************************************************
  **/

import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Báo cáo',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      // text: 'NEW'
      text: ''
    }
  },
  {
    name: 'Khách hàng',
    url: '/customer',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      // text: 'NEW'
      text: ''
    }
  },
  {
    name: 'Kho hàng',
    url: '/warehouse',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      // text: 'NEW'
      text: ''
    }
  },
  {
    name: 'Giỏ hàng',
    url: '/cart',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      // text: 'NEW'
      text: ''
    }
  },
  {
    title: true,
    name: 'Hóa đơn',
  },
  {
    name: 'Đang chờ',
    url: '/receipt',
    icon: 'icon-speedometer',
    linkProps: { 
      queryParams: { 'status': '0' },
     },
    badge: {
      variant: 'info',
      // text: 'NEW'
      text: ''
    },
  },
  {
    name: 'Đang giao',
    url: '/receipt',
    icon: 'icon-speedometer',
    linkProps: { 
      queryParams: { 'status': '1' },
     },
    badge: {
      variant: 'info',
      // text: 'NEW'
      text: ''
    },
  },
  {
    name: 'Đã giao',
    url: '/receipt',
    icon: 'icon-speedometer',
    linkProps: { 
      queryParams: { 'status': '2' },
     },
    badge: {
      variant: 'info',
      // text: 'NEW'
      text: ''
    },
  },
];
