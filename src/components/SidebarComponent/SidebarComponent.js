import React, { useState } from 'react';
import './SidebarComponent.scss'
import { Checkbox } from 'antd';
import { Slider, Switch } from 'antd';

const SidebarComponent = () => {
    const [min, setIsMin] = useState(1000)
    const [max, setIsMax] = useState(50000)
    const [minForm, setIsMinForm] = useState(min)
    const [maxForm, setIsMaxForm] = useState(max)

    const onChange = (e) => {
        console.log(e);
    }

    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
        { label: 'Guava', value: 'Guava' },
        { label: 'Lontar', value: 'Lontar' },
        { label: 'Pinapple', value: 'Pinapple' },
    ];

    const handleMin = (e) => {
        setIsMinForm(e.target.value)
        setIsMin(e.target.value)
        // getValue(e.target.value)
        // setIsMin(e.target.value);
    }
    const handleMax = (e) => {
        setIsMaxForm(e.target.value)
        setIsMax(e.target.value)
        // console.log(e.target.value);
        // getValue(e.target.value)
        // setIsMax(e.target.value);
    }

    const getValue = (e) => {
        setIsMinForm(e[0])
        setIsMaxForm(e[1])
        setIsMin(e[0])
        setIsMax(e[1])
    }

    return (
        <div className="sidebar">
            <div className="side-category">
                <div className="row">
                    <div className=" title-category col-md-6">
                        <h2 className="label-sidebar">Category</h2>
                    </div>
                    <div className="clear-filter col-md-6">
                        <button>Clear Filter</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="category-fill">
                        <Checkbox.Group options={options} onChange={onChange} />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="price-range">
                <h2 className="label-sidebar">Price Range</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="price">
                            <input name="min" onChange={handleMin} value={minForm}></input>
                            <input name="max" onChange={handleMax} value={maxForm}></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="slider mt-4">
                            <Slider
                                value={[min, max]}
                                onChange={getValue}
                                min={1000} max={100000} range />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarComponent;