import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonCard = () => {
  return (
    <div>
      {Array(1)
        .fill()
        .map(i => (
          <div className='search-placeholder'>
            <Skeleton height={35} width={`50%`} />
          </div>
        ))}
      <div className='app load-app'>
        {Array(20)
          .fill()
          .map((users, i) => (
            <div key={i} className='all_details load'>
              <div>
                <Skeleton height={40} width={300} />
              </div>

              <p>
                <Skeleton height={10} width={90} />
                <b>
                  <Skeleton height={10} width={200} />
                </b>
              </p>

              <p>
                <Skeleton height={10} width={100} />
                <b>
                  <Skeleton height={10} width={190} />
                </b>
              </p>

              <p>
                <Skeleton height={10} width={100} />
                <b>
                  <Skeleton height={10} width={190} />
                </b>
              </p>

              <p>
                <Skeleton height={10} width={105} />
                <b>
                  <Skeleton height={10} width={185} />
                </b>
              </p>

              <p>
                <Skeleton height={10} width={110} />
                <b>
                  <Skeleton height={10} width={180} />
                </b>
              </p>

              <p>
                <Skeleton height={10} width={100} />
                <b>
                  <Skeleton height={10} width={190} />
                </b>
              </p>

              <p>
                <Skeleton height={10} width={110} />
                <b>
                  <Skeleton height={10} width={180} />
                </b>
              </p>

              <p>
                <Skeleton height={10} width={100} />
                <b>
                  <Skeleton height={10} width={190} />
                </b>
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SkeletonCard
