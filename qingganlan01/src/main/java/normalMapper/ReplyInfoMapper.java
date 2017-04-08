package normalMapper;

import java.util.List;
import normalPo.ReplyInfo;
import normalPo.ReplyInfoExample;
import org.apache.ibatis.annotations.Param;

public interface ReplyInfoMapper {
    int countByExample(ReplyInfoExample example);

    int deleteByExample(ReplyInfoExample example);

    int deleteByPrimaryKey(String replyId);

    int insert(ReplyInfo record);

    int insertSelective(ReplyInfo record);

    List<ReplyInfo> selectByExample(ReplyInfoExample example);

    ReplyInfo selectByPrimaryKey(String replyId);

    int updateByExampleSelective(@Param("record") ReplyInfo record, @Param("example") ReplyInfoExample example);

    int updateByExample(@Param("record") ReplyInfo record, @Param("example") ReplyInfoExample example);

    int updateByPrimaryKeySelective(ReplyInfo record);

    int updateByPrimaryKey(ReplyInfo record);
}