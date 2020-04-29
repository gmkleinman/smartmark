@passages.each do |passage|
    json.set! passage.id do
        json.partial! 'api/passages/passage', passage: passage
    end
end