function mergesort_recur_inplace(numbers: number[]){

}

function merge_inplace( entire_numbers: number[], 
                        start_index_a: number, 
                        end_index_a: number,
                        start_index_b: number,
                        end_index_b: number ){
                            
                        while(start_index_a <= end_index_a && start_index_b <= end_index_b){
                            if(entire_numbers[start_index_a] > entire_numbers[start_index_b]){
                                // chuyen b sang a
                                swap_mergesort_inplace(entire_numbers, start_index_a, start_index_b);
                                // vi start_index_a là nhỏ nhất trong a
                                // mà start_index_b lại còn nhỏ hơn start_index_a nữa
                                // nên sau khi chuyển, start_index_b nghiêm nhiên nhỏ nhất trong a
                                // chỉ có điều. Start_index_a tức số ở start_index_b mới
                                // chưa chắc đã là số nhỏ nhất trong dãy b
                                // Cần phải được sắp xếp lại cho tới khi nhỏ nhất
                                    
                            }
                        }

                        }


function swap_mergesort_inplace(entire_numbers: number[],
                                index_a: number,
                                index_b: number
                                )
                                {
                                    var temp = entire_numbers[index_a];
                                    entire_numbers[index_a] = entire_numbers[index_b];
                                    entire_numbers[index_b] = temp;
                                }