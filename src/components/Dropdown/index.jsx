import './dropdown.scss'
import { useState } from 'react'

const Dropdown = ({ title, datas }) => {
    const [isOpen, setIsOpen] = useState(false)
    let stateClass = 'fa-chevron-down'
    isOpen ? stateClass = 'fa-chevron-up' : stateClass = 'fa-chevron-down'
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='dropdown'>
                <p className='title' onClick={toggleDropdown}>{title}<span><i className={`fa-solid ${stateClass}`}></i></span></p>
                {isOpen && title !== 'equipements' &&
                    <p className='content'>{datas.description}</p>
                }
                {isOpen && title === 'equipements' &&
                    <ul className='content'>
                        {datas.map((equip, index) => (
                            <li key={index}>{equip}</li>
                        ))}
                    </ul>
                }
            </div>
        </>
    )

}
export default Dropdown