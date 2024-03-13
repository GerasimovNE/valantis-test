import React from 'react';
import { FilterBar } from './views/FilterBar/FilterBar';
import { Button } from './ui/button/button';
import { getItemsFunc } from './func/getItemsFunc';
import { getItemsAxios } from './biz/getItemsAxios';
import { ItemList } from './views/ItemList/ItemList';

import './App.css';
export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            filterIds: [],
            items: [],
            offset: 0,
            isFilt: false,
            isDisabledButtonPrev: true,
            isDisabledButtonNext: false,
        };
    }
    getItems = async (offset, filterIds, isFilt) => {
        this.setState({
            isDisabledButtonPrev: true,
            isDisabledButtonNext: true,
        });
        this.setState({ items: await getItemsFunc(offset, filterIds, isFilt) });
        this.setState({
            isDisabledButtonPrev: false,
            isDisabledButtonNext: false,
        });
    };

    getFilterIds = async (params) => {
        const result = await getItemsAxios('filter', params);
        this.setState({
            filterIds: result,
            isFilt: true,
            offset: 0,
        });
        this.getItems(0, result, true);
    };

    clearFilt = () => {
        this.setState({ isFilt: false, offset: 0, filterIds: [] });
        this.getItems(0, [], false);
    };

    handlerButtonNext = () => {
        this.setState({ offset: this.state.offset + 50 });
        this.getItems(
            this.state.offset + 50,
            this.state.filterIds,
            this.state.isFilt
        );
    };

    handlerButtonPrev = () => {
        this.setState({ offset: this.state.offset - 50 });
        this.getItems(
            this.state.offset - 50,
            this.state.filterIds,
            this.state.isFilt
        );
    };
    componentDidMount() {
        this.getItems(0, [], false);
    }

    render() {
        return (
            <div className="App">
                <FilterBar
                    getFilterIds={this.getFilterIds}
                    itemsGet={this.getItems}
                    clearFilt={this.clearFilt}
                />
                <div className="NavBar">
                    <Button
                        disabled={
                            this.state.offset === 0 ||
                            this.state.isDisabledButtonPrev
                        }
                        onClick={this.handlerButtonPrev}
                        label="prev"
                    />
                    <Button
                        disabled={
                            this.state.items.length < 50 ||
                            this.state.isDisabledButtonNext
                        }
                        onClick={this.handlerButtonNext}
                        label="next"
                    />
                </div>
                <ItemList items={this.state.items} />;
            </div>
        );
    }
}

export default App;
