import React from 'react';
import './SubNavNotifikasi.scss';
import { Tabs } from 'antd';
import { SettingOutlined } from '@ant-design/icons';


const SubNavNotifikasiComponent = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }


    return (
        <div className="subnav-notif">
            <div className="header">
                <h1>Notification</h1>
                <a href="#user-notif">
                    <span><SettingOutlined /></span>
                </a>
            </div>
            <div className="body-bar">
                <Tabs size="medium" defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Transaction" key="1">
                        Consectetur Lorem do sint laborum veniam deserunt quis velit ad deserunt commodo aliquip. Magna ad eiusmod nisi ad mollit duis. Commodo duis nostrud nulla aute ex labore eiusmod ut occaecat qui sunt amet aliqua nisi. Laboris sint elit id commodo. Est cillum eiusmod labore labore cupidatat labore sint sint est. Culpa cillum Lorem exercitation occaecat in enim dolore aute qui culpa amet.

                        Incididunt quis in laborum irure aliquip irure ex nisi elit incididunt Lorem irure. Minim occaecat occaecat deserunt dolore aliqua aute ex et sit ea tempor occaecat exercitation. Ipsum cupidatat ipsum ea in sint officia excepteur. Lorem tempor magna ipsum sunt do occaecat ipsum. Aliquip quis aliquip dolor ut ea dolor do.
                    </TabPane>
                    <TabPane tab="Update" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default SubNavNotifikasiComponent;