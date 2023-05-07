import React, { useContext } from 'react'
import Select from '../Select'
import { GlobalContext } from '../../contexts/GlobalProvider'

const options = [
  {
    id: 'foo',
    label: 'foo',
  },
  {
    id: 'bar',
    label: 'bar',
  },
  {
    id: 'foobar',
    label: 'foobar',
  },
]

const FILTER_ALL = [
  {
    id: 'all',
    label: 'all',
  },
]

const ListBar = () => {
  const {
    categories: { data },
  } = useContext(GlobalContext)

  const categoriesOptions =
    data?.map((item) => ({
      id: item.toLowerCase(),
      label: item,
    })) || []

  const handleChange = (type: string, option: string) => {
    if (type === 'filter') {
      console.log('====================================')
      console.log('aqui')
      console.log('====================================')
    }
  }

  return (
    <div className="flex gap-2 mx-16 bg-gray-700 border border-gray-100 my-4 p-2 rounded-md justify-end">
      <Select
        label="Filter"
        name="filter"
        options={[...FILTER_ALL, ...categoriesOptions]}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange('filter', event.target.value)
        }
      />
      <Select
        label="Order by"
        name="order"
        options={options}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange('order', event.target.value)
        }
      />
    </div>
  )
}

export default ListBar
