class ListManipulator {
    constructor(data) {
        this.data = data || [];
    }

    filterByField(field, value) {
        this.data = this.data.filter(item => item[field] === value);
    }

    filterByRange(field, min, max) {
        this.data = this.data.filter(item => {
            const value = item[field];
            return value >= min && value <= max;
        });
    }

    sortByField(field, ascending = true) {
        this.data.sort((a, b) => {
            const aValue = a[field];
            const bValue = b[field];

            if (aValue < bValue) {
                return ascending ? -1 : 1;
            } else if (aValue > bValue) {
                return ascending ? 1 : -1;
            } else {
                return 0;
            }
        });
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
}