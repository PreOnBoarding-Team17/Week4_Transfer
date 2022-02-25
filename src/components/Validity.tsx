import React, { useEffect, useState } from 'react';

interface ValidityProps {
  date: number;
}

const Validity: React.FC<ValidityProps> = ({ date }) => {
  const [valid, setValid] = useState<string>('');
  const [days, setDays] = useState<number>(-1);
  const [expired, setExpired] = useState<boolean>(false);
  const inputValidity = new Date(date * 1000);

  const getDiffDays = (date: Date): number => {
    const diff = date.getTime() - new Date().getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const getDiffHours = (date: Date): number => {
    const diff = date.getTime() - new Date().getTime();
    return Math.floor(diff / (1000 * 60 * 60));
  };

  const getDiffMinutes = (date: Date): number => {
    const diff = date.getTime() - new Date().getTime();
    return Math.floor(diff / (1000 * 60));
  };

  useEffect(() => {
    if (new Date().getTime() - date * 1000 < 0) {
      if (getDiffHours(inputValidity) >= 48) {
        setDays(getDiffDays(inputValidity));
        setValid(`${getDiffDays(inputValidity)}일`);
      } else if (getDiffHours(inputValidity) > 0) {
        setValid(
          `${getDiffHours(inputValidity)}시간 ${
            getDiffMinutes(inputValidity) - getDiffHours(inputValidity) * 60
          }분`
        );
      } else {
        setValid(
          `${
            getDiffMinutes(inputValidity) - getDiffHours(inputValidity) * 60
          }분`
        );
      }
    } else {
      setExpired(true);
      setValid('만료됨');
    }
  }, [date]);

  useEffect(() => {
    if (days === -1 || expired) {
      const interval: NodeJS.Timer = setInterval(() => {
        if (new Date().getTime() - date * 1000 < 0) {
          if (getDiffHours(inputValidity) >= 48) {
            clearInterval(interval);
          } else if (getDiffHours(inputValidity) > 0) {
            setValid(
              `${getDiffHours(inputValidity)}시간 ${
                getDiffMinutes(inputValidity) - getDiffHours(inputValidity) * 60
              }분`
            );
          } else {
            setValid(
              `${
                getDiffMinutes(inputValidity) - getDiffHours(inputValidity) * 60
              }분`
            );
          }
        } else {
          setValid('만료됨');
          clearInterval(interval);
        }
      }, 10000);
      return () => clearInterval(interval);
    }
  }, []);

  return <span>{valid}</span>;
};

export default Validity;
