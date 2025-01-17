import deepEql from 'deep-eql'

export const defaultState = {
	expandMultiple: false,
	expanded: [],
}

export const mutations = {
	expandRow(store, row) {
		const { state } = store
		const isExpanded = toggleRowExpansion(state, row)
		store.emit('expandChange', [...state.expanded])
		store.emit('expand', row, isExpanded)
	},
}

export const getters = {
	isExpanded(state, row) {
		return state.expanded.some(e => deepEql(e, row))
	},
}

function toggleRowExpansion(state, row) {
	const expanded = state.expanded
	const index = expanded.findIndex(elem => deepEql(elem, row))
	const shouldExpand = index === -1 //if the row is not already included in state.expanded

	if (state.expandMultiple) {
		shouldExpand ? expanded.push(row) : expanded.splice(index, 1)
	} else {
		//explicitly need state.expanded b/c Object reference will to be changed w/ assignments
		state.expanded = shouldExpand ? [row] : []
	}
	return shouldExpand
}
