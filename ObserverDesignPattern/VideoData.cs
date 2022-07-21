using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverDesignPattern
{
    public class VideoData: Subject
    {
        private string _title;
        private string _description;
        private string _fileName;

        private void VideoDataChanged()
        {
            NotifyAllObservers(this, null);
        }

        public string Title
        {
            get => _title;
            set
            {
                _title = value;
                VideoDataChanged();
            }
        }
       
        public string Description
        {
            get => _description;
            set
            {
                _description = value;
                VideoDataChanged();
            }
        }
        public string FileName
        {
            get => _fileName;
            set
            {
                _fileName = value; 
                VideoDataChanged();
            }
        }
    }
}
