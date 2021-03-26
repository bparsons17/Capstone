import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeGoal } from '../store/goals'
import {Button} from 'antd'
import 'antd/dist/antd.css';
import './style/goal.css'
import Info from '../components/Info'
import {Route} from 'react-router-dom'

const Goal = ({user, goal}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const sessionGoals = useSelector((state) => (state.goal.goal))
    console.log(sessionGoals)
    

    useEffect(()=> {
        dispatch(seeGoal())
    }, [])


    console.log(sessionGoals)

    return (
    <div className='yug'>{sessionGoals && 
        sessionGoals.map((goal)=> (
          <div className='col-1'>
            <div key={goal.id} class="idk p-5">  
            <div class="card max-w-sm rounded overflow-hidden shadow-lg">
              <div class="input-holder px-6 py-4">
        <div class="title font-bold text-xl mb-2">{goal.title}</div>
                <p class="p-tags text-gray-700 text-base">
                  Goal Description: {goal.description}
                </p>
                <p class="p-tags text-gray-700 text-base">
                    Steps to complete goal: {goal.steps}

                </p>
                <p class="p-tags text-gray-700 text-base">
                    Accoplish by: {goal.deadline}
                </p>
              </div>
              <div class="px-3 pt-2 pb-2">
                {/* <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mark as Completed
                    
                </button> */}
                <div className='btn-holder rounded-full'>
                <Info goal={goal}></Info>
                </div>
                
              </div>
            </div>
          </div>
           </div>
        )) }
        {/* <div className='col-2'>
          <div className='anchor'>
            <a href='/goals' className='goal_submit_button2'>Create New Goal</a>
          </div>
          <div className='mark-btn'>
          <a className='goal_submit_button3'>Mark Completed</a>
          </div>
        </div>
         */}
        </div>
    )
}

export default Goal;