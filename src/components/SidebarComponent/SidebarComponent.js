import React from 'react';
import './SidebarComponent.scss'
import { Checkbox } from 'antd';

const SidebarComponent = () => {

    const onChange = (e) => {
        console.log(e);
    }

    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
        { label: 'Guava', value: 'Guava' },
    ];

    return (
        <div className="sidebar">
            <div className="side-category">
                <div className="row">
                    <div className=" title-category col-md-6">
                        <h2>Category</h2>
                    </div>
                    <div className="clear-filter col-md-6">
                        <button>Clear Filter</button>
                    </div>
                </div>
            </div>
            <div className="category-fill">
                <Checkbox.Group options={options} onChange={onChange} />
            </div>
            <div className="price-range">
                
            </div>
        </div>
    );
};

export default SidebarComponent;