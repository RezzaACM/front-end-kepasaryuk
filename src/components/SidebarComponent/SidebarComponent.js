import React, { useState } from 'react';
import './SidebarComponent.scss'
import { Checkbox } from 'antd';
import { Slider } from 'antd';
import NumberFormat from 'react-number-format';
import { InputNumber } from 'antd';


const SidebarComponent = () => {
    const [min, setMin] = useState(1000);
    const [max, setMax] = useState(50000);
    const [change, setChange] = useState(false)
    const [minForm, setMinForm] = useState(1000);
    const [maxForm, setMaxForm] = useState(50000);

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
        setChange(true)
        setMin(e.target.value)
    }
    const handleMax = (e) => {
        setChange(true)
        setMax(e.target.value)
    }

    const getValue = (e) => {
        // setMin(e[0])
        // setMax(e[1])
        setMinForm(e[0])
        setMaxForm(e[1])
    }

    const test = () => {
        // console.log(minForm);
        if (change === true) {
            setChange(false)
            setMinForm(min)
            setMaxForm(max)
        }
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
                            <span style={{ position: 'absolute', paddingLeft: '10px' }}>Rp. </span>
                            <input type="text"
                                value={change ? min : minForm}
                                min={1000}
                                onChange={handleMin} />
                            <span style={{ position: 'absolute', marginLeft: '77px' }}>Rp. </span>
                            <input type="text"
                                // value={max}
                                value={change ? max : maxForm}
                                onChange={handleMax} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div onMouseEnter={test} className="slider mt-4">
                            <Slider
                                step={100}
                                // value={change ? [minForm, maxForm] : [min, max]}
                                value={change ? [min, max] : [minForm, maxForm]}
                                defaultValue={[minForm, maxForm]}
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