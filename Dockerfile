FROM python:3.9

ADD . IntertechDOB 
WORKDIR /IntertechDOB

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y
#RUN apt-get install libzbar0 -y

EXPOSE 5000

CMD ["python", "api.py"]