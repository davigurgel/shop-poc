import React, { useContext } from 'react'
import Select from '../Select'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { i18n } from '../../i18n'

const orderOptions = [
  {
    id: i18n.t('listBar.options.default'),
    label: i18n.t('listBar.options.default'),
  },
  {
    id: i18n.t('listBar.options.price'),
    label: i18n.t('listBar.options.price'),
  },
  {
    id: i18n.t('listBar.options.popularity'),
    label: i18n.t('listBar.options.popularity'),
  },
]

const FILTER_ALL = [
  {
    id: i18n.t('listBar.options.all'),
    label: i18n.t('listBar.options.all'),
  },
]

const ListBar = () => {
  const {
    categories: { data },
    setFilterSlug,
    setOrderBy,
  } = useContext(GlobalContext)

  const categoriesOptions =
    data?.map((item) => ({
      id: item.toLowerCase(),
      label: item,
    })) || []

  const handleChange = async (type: string, option: string) => {
    if (type === 'filter') {
      setFilterSlug(option)
    } else {
      setOrderBy(option)
    }
  }

  return (
    <div className="flex gap-2 bg-gray-700 border border-gray-100 my-4 p-2 rounded-md justify-end">
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
        options={orderOptions}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange('order', event.target.value)
        }
      />
    </div>
  )
}

export default ListBar
